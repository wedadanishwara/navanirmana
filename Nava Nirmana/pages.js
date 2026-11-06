document
  .querySelectorAll(".year")
  .forEach((node) => (node.textContent = new Date().getFullYear()));
const inquiryForm = document.querySelector("#inquiry-form");
if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    const fields = new FormData(inquiryForm);
    const subject = encodeURIComponent(
      `Property enquiry — ${fields.get("property") || fields.get("name")}`,
    );
    const lines = [
      `Name: ${fields.get("name")}`,
      `Company / property: ${fields.get("property") || "Not provided"}`,
      `Email: ${fields.get("email")}`,
      `WhatsApp: ${fields.get("phone") || "Not provided"}`,
      `Location: ${fields.get("location") || "Not provided"}`,
      `Property type: ${fields.get("type") || "Not provided"}`,
      `Service: ${fields.get("service") || "Not sure yet"}`,
      "",
      fields.get("message") || "",
    ];
    document.querySelector(".form-status").textContent =
      "Your email app is opening with the enquiry details.";
    window.location.href = `mailto:navanirmana.hospitality@gmail.com?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
  });
}
