<script setup lang="ts">
import { ref, type Ref } from "vue";

interface Form {
  email: string;
  subject: string;
  message: string;
}

const form: Ref<Form> = ref({
  email: "",
  subject: "",
  message: "",
});

const successMessage = ref("");
const errorMessage = ref("");
const sending = ref(false);


function validate(data: Form) {
  if (!data.email || !data.subject || !data.message) {
    return "Please fill in all required fields.";
  }

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(data.email)) return "Please enter a valid email.";
  if (data.message.length < 6) return "Message must be at least 6 characters.";
  return "";
}

const send_message = async (event?: Event) => {
  if (event && typeof event.preventDefault === "function")
    event.preventDefault();

  successMessage.value = "";
  errorMessage.value = "";

  const payload = form.value;

  const clientValidation = validate(payload);
  if (clientValidation) {
    errorMessage.value = clientValidation;
    return;
  }

  sending.value = true;
  try {
    const response = await $fetch("/api/telegram", {
      method: "POST",
      body: payload,
    });

    if (response && (response as any).ok !== false) {
      successMessage.value = "Message sent successfully!";
      form.value = { email: "", subject: "", message: "" };
    } else {
      errorMessage.value = "Failed to send message. Please try again later.";
    }
  } catch (err) {
    console.error("Error sending message:", err);
    errorMessage.value = "Error sending message. Check console or server logs.";
  } finally {
    sending.value = false;
  }
};

watchEffect(() => {
  if (successMessage.value || errorMessage.value) {
    const timer = setTimeout(() => {
      successMessage.value = "";
      errorMessage.value = "";
    }, 5000);
    return () => clearTimeout(timer);
  }
});

</script>

<template>
  <section id="contact">
    <div class="mt-16 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        <span class="text-primary poppins"> Contact</span> me
      </h1>
    </div>

    <div class="grid md:grid-cols-2 py-24 gap-4 relative">
      <div>
        <h2 class="text-xl font-bold my-2">Let's Connect</h2>
        <p class="mb-4 max-w-md">
          Don't hesitate to send me a message or an e-mail. <br />I will get
          back to you as fast as I can.
        </p>
        <div class="flex flex-col gap-4 text-xl">
          <div class="flex flex-row gap-x-6">
            <a href="https://github.com/NhebPanha" target="_blank" class="hover:text-primary"
              aria-label="GitHub Profile">
              Github
              <Icon name="fa6-brands:github" class="size-8" />
            </a>
            <a href="https://www.linkedin.com/in/nheb-panha-223527282/" target="_blank" class="hover:text-primary"
              aria-label="LinkedIn Profile">
              Linkedin
              <Icon name="fa6-brands:linkedin" class="size-8" />
            </a>
          </div>
          <div class="flex flex-row items-center">
            <a href="mailto:nhebpanha78@gmail.com" class="text-base md:text-lg font-bold hover:text-primary">
              <Icon name="fa6-solid:envelope" class="size-6" />
              nhebpanha78@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div>
        <form class="flex flex-col" @submit.prevent="send_message">
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
            <input v-model="form.email" type="email" required id="email"
              class="bg-white/10 border border-primary text-sm outline-none rounded-md block w-full p-3 focus:ring-2 ring-primary"
              placeholder="Email" name="email" />
          </div>

          <div class="mb-6">
            <label for="subject" class="block text-sm mb-2 font-medium">Subject</label>
            <input v-model="form.subject" required type="text" id="subject"
              class="bg-white/10 border border-primary text-sm outline-none rounded-md block w-full p-3 focus:ring-2 ring-primary"
              placeholder="Subject of your message" name="subject" />
          </div>

          <div class="mb-6">
            <label for="message" class="block text-sm mb-2 font-medium">Message</label>
            <textarea v-model="form.message" name="message" id="message"
              class="bg-white/10 border border-primary text-sm outline-none rounded-md block w-full p-3 focus:ring-2 ring-primary"
              placeholder="Let's talk about..." rows="5"></textarea>
          </div>

          <button type="submit" :disabled="sending"
            class="text-slate-100 bg-primary hover:bg-blue-300 font-extrabold py-2.5 px-5 rounded-lg w-full">
            <span v-if="!sending">Send Message</span>
            <span v-else>Sending...</span>
          </button>
          <div class="p-2">
            <div v-if="successMessage" class="mb-4 text-green-600">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="mb-4 text-red-500">
              {{ errorMessage }}
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
