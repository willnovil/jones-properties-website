export default function MapEmbed() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8!2d-84.877!3d35.159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886062d3f6e7c5c9%3A0x9c5c5c5c5c5c5c5c!2s201+Keith+St+SW+%2380%2C+Cleveland%2C+TN+37311!5e0!3m2!1sen!2sus!4v1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Jones Properties Office Location"
      />
    </div>
  );
}
