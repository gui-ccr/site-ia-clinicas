// netlify/functions/utils/email.ts

import nodemailer from 'nodemailer';
import Stripe from 'stripe';

// Inicializa o Stripe e o Nodemailer aqui também
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Senha de aplicativo
  },
});

// Esta função será chamada pelo nosso webhook
export async function enviarEmailConfirmacao(sessionId: string) {
  try {
    // 1. Buscar os detalhes completos da sessão para pegar o e-mail do cliente
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'line_items'],
    });

    const emailCliente = session.customer_details?.email;
    const nomeCliente = session.customer_details?.name || "Cliente";
    const valorTotal = session.amount_total || 0;
    const nomeProduto = session.line_items?.data[0]?.description || "Sistema de IA para Clínicas";

    if (!emailCliente) {
      console.error("Email do cliente não encontrado na sessão. Não é possível enviar a confirmação.");
      return;
    }

    const valorFormatado = (valorTotal / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    // 2. Preparar e enviar os e-mails (para o cliente e para o dono)
    const emailDono = process.env.OWNER_EMAIL!;

    // Template para o cliente
    const emailClienteHtml = `<h2>Olá, ${nomeCliente}!</h2><p>Sua compra do produto '${nomeProduto}' no valor de ${valorFormatado} foi confirmada com sucesso!</p>`;

    // Template para o dono
    const emailDonoHtml = `<h1>Nova Venda!</h1><p>Cliente: ${nomeCliente} (${emailCliente})</p><p>Produto: ${nomeProduto}</p><p>Valor: ${valorFormatado}</p>`;

    // Envia para o cliente
    await transporter.sendMail({
      from: `"Sistema IA Clínicas" <${process.env.SMTP_USER}>`,
      to: emailCliente,
      subject: "✅ Confirmação de Compra",
      html: emailClienteHtml,
    });

    // Envia para o dono
    await transporter.sendMail({
      from: `"Notificação de Venda" <${process.env.SMTP_USER}>`,
      to: emailDono,
      subject: `🎉 Nova Venda: ${nomeProduto}`,
      html: emailDonoHtml,
    });

    console.log(`✅ Emails de confirmação enviados para ${emailCliente} e ${emailDono}`);

  } catch (error) {
    console.error("❌ Erro ao enviar emails de confirmação:", error);
  }
}