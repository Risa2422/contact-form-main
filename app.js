const form = document.querySelector("#contact_form");
const general = document.querySelector(".general");
const support = document.querySelector(".support");
const generalId = document.querySelector("#query-type-general");
const supportId = document.querySelector("#query-type-support");

general.addEventListener("click", () => {
  if (generalId.checked) {
    general.classList.add("checked");
    support.classList.remove("checked");
  }
});

support.addEventListener("click", () => {
  if (supportId.checked) {
    support.classList.add("checked");
    general.classList.remove("checked");
  }
});

emailjs.init({
  publicKey: "xSEOQGryYtK6bWHTm",
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const email = formData.get("email");
  const queryType = formData.get("query-type");
  const message = formData.get("message");
  const consent = formData.get("consent");

  let templateParams = {
    to_name: "Risa",
    from_name: `${firstName} ${lastName}`,
    message: `
        Email: ${email}
        Query: ${queryType}
        Message: ${message}
        Consent: ${consent ? "Yes" : "No"}
    `,
  };

  emailjs.send("service_np1orcb", "template_2tvut9h", templateParams).then(
    (response) => {
      const success = document.querySelector(".success");
      success.classList.add("visible");
      formReset();
      setTimeout(() => {
        success.classList.remove("visible");
      }, 5000);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});

function formReset() {
  form.reset();
  support.classList.remove("checked");
  general.classList.remove("checked");
}
