export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as {
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!body?.email || !body?.subject || !body?.message) {
    throw createError({
      statusCode: 422,
      statusMessage: "Missing required fields",
    });
  }

  const config = useRuntimeConfig();
  const botToken = config.telegramBotToken as string;
  const chatId = config.telegramChatId as string;

  if (!botToken || !chatId) {
    throw createError({
      statusCode: 500,
      statusMessage: "Server not configured",
    });
  }

  const messageText = `
<b>📬 New Contact Form Submission</b>
<b>👤 Email:</b> ${escapeHtml(body.email)}
<b>📩 Subject:</b> ${escapeHtml(body.subject)}
<b>💬 Message:</b> ${escapeHtml(body.message)}
  `.trim();

  try {
    await $fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      body: { chat_id: chatId, parse_mode: "HTML", text: messageText },
    });
    return { ok: true };
  } catch (err) {
    console.error("Telegram send error:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send to Telegram",
    });
  }
});

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
