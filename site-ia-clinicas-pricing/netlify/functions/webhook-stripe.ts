// netlify/functions/webhook-stripe.ts

import { Handler, HandlerEvent } from "@netlify/functions";
import Stripe from 'stripe';
import { enviarEmailConfirmacao } from './utils/email'; // Vamos criar este arquivo a seguir

const stripeSecretKey = process.env.STRIPE_SECRET_KEY!;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!; // A chave secreta do webhook
const stripe = new Stripe(stripeSecretKey);

const handler: Handler = async (event: HandlerEvent) => {
  // O Stripe precisa do corpo RAW (texto puro) para verificar a assinatura
  const sig = event.headers['stripe-signature']!;
  const body = event.body!;

  try {
    const stripeEvent = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    // Lide com o evento
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object as Stripe.Checkout.Session;

      console.log(`✅ Webhook recebido: Checkout da sessão ${session.id} foi concluído!`);

      // Chame a função para buscar detalhes e enviar o e-mail
      await enviarEmailConfirmacao(session.id);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err: unknown) {
    const error = err as Error;
    console.error(`❌ Erro no Webhook: ${error.message}`);
    return {
      statusCode: 400,
      body: `Webhook Error: ${error.message}`,
    };
  }
};

export { handler };