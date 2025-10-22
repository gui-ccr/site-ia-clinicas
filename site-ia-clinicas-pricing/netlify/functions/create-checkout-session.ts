import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY!;
const stripe = new Stripe(stripeSecretKey);

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // Garantir que a requisição é um POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }
  
  try {
    const produto = {
      nome: "Sistema de IA (N8N) para Clínicas",
      preco_em_centavos: 74850,
    };

    const siteUrl = process.env.SITE_URL || 'https://agentesparaclinicas.com.br';
    const successUrl = `${siteUrl}/sucesso`;
    const cancelUrl = `${siteUrl}/`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "boleto"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: produto.nome,
            },
            unit_amount: produto.preco_em_centavos,
          },
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    // Envia a resposta de sucesso
    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };

  } catch (error: unknown) {
    console.error("Erro ao criar a sessão de checkout:", error);
    if (error instanceof Error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
    return {
        statusCode: 500,
        body: JSON.stringify({ error: "Não foi possível criar a sessão de pagamento." }),
    };
  }
};

export { handler };