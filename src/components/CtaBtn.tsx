import WhatsAppImg from "@/assets/icon/whatsapp-svgrepo-com.svg"
const CtaBtn = () => {
  return (
    <div>
        {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971561673716" // replace YOUR_PHONE_NUMBER with full number including country code without '+' or spaces
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-black hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon SVG */}
        <img className="h-10" src={WhatsAppImg} alt="" />
      </a>
    </div>
  )
}

export default CtaBtn
