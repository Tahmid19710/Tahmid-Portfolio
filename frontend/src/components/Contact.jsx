
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_pb5ald7",
        "template_wteqpjc",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "9YPTr_Ft1jdA8ZNDc"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes contactFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes contactRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes contactGlow {
          0%, 100% { opacity: .25; }
          50% { opacity: .75; }
        }

        @keyframes contactEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactShine {
          from { transform: translateX(-150%) skewX(-20deg); }
          to { transform: translateX(250%) skewX(-20deg); }
        }

        @keyframes contactBorder {
          from { background-position: 0% 50%; }
          to { background-position: 200% 50%; }
        }

        .contact-enter {
          animation: contactEnter .7s ease-out both;
        }

        .contact-float {
          animation: contactFloat 5s ease-in-out infinite;
        }

        .contact-rotate {
          animation: contactRotate 25s linear infinite;
        }

        .contact-glow {
          animation: contactGlow 4s ease-in-out infinite;
        }

        .contact-border {
          background-size: 200% 200%;
          animation: contactBorder 5s linear infinite;
        }

        .contact-card {
          transition: all .3s ease;
        }

        .contact-card:hover {
          transform: translateY(-3px);
          border-color: rgba(168,85,247,.55);
          box-shadow: 0 8px 25px rgba(139,92,246,.12);
        }

        .contact-input {
          transition: all .3s ease;
        }

        .contact-input:focus {
          outline: none;
          border-color: rgba(168,85,247,.85);
          background: rgba(168,85,247,.07);
          box-shadow: 0 0 0 3px rgba(168,85,247,.10);
        }

        .contact-send {
          position: relative;
          overflow: hidden;
        }

        .contact-send::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
          );
        }

        .contact-send:hover::before {
          animation: contactShine .8s ease;
        }

        .contact-send:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 25px rgba(139,92,246,.4);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-enter,
          .contact-float,
          .contact-rotate,
          .contact-glow,
          .contact-border {
            animation: none !important;
          }

          .contact-card,
          .contact-input,
          .contact-send {
            transition: none !important;
          }
        }
      `}</style>

      <section
        id="contact"
        className="relative min-h-[calc(100svh-76px)] flex items-center justify-center overflow-hidden bg-[#080812] text-white px-4 sm:px-6 py-3 scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="contact-glow absolute -top-20 left-[10%] w-72 h-72 rounded-full bg-purple-600/20 blur-[90px]" />

          <div className="contact-glow absolute -bottom-20 right-[5%] w-72 h-72 rounded-full bg-cyan-500/15 blur-[90px]" />

          <div className="contact-rotate absolute top-[10%] right-[12%] w-36 h-36 rounded-full border border-purple-400/10" />

          <div className="contact-rotate absolute bottom-[10%] left-[8%] w-44 h-44 rounded-full border border-cyan-400/10"
            style={{ animationDirection: "reverse" }}
          />

          {[
            "top-[15%] left-[12%]",
            "top-[35%] right-[15%]",
            "bottom-[20%] left-[25%]",
            "bottom-[25%] right-[12%]",
            "top-[65%] right-[35%]"
          ].map((position, index) => (
            <div
              key={index}
              className={`contact-float absolute ${position} w-1.5 h-1.5 rounded-full ${
                index % 2 === 0
                  ? "bg-purple-400"
                  : "bg-cyan-400"
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            />
          ))}

        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-6xl w-full mx-auto">

          {/* Heading */}
          <div className="contact-enter text-center mb-4">

            <span className="text-[9px] tracking-[0.35em] font-bold text-purple-400 uppercase">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2" />

            <p className="text-gray-400 text-[10px] md:text-xs mt-2">
              Have an idea, opportunity, or project in mind? Let's talk.
            </p>

          </div>

          {/* Wide Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-3 md:gap-4 items-stretch">

            {/* LEFT PANEL */}
            <div
              className="contact-enter contact-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#10101d]/95 backdrop-blur-xl p-4 sm:p-5"
              style={{ animationDelay: "120ms" }}
            >

              <div className="contact-glow absolute -top-16 -right-10 w-40 h-40 rounded-full bg-purple-500/15 blur-[70px]" />

              <div className="relative z-10">

                {/* Title */}
                <div className="flex items-center gap-3 mb-3">

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
                    ✦
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      Let's Talk
                    </h3>
                    <p className="text-[9px] text-gray-500">
                      Start a conversation
                    </p>
                  </div>

                </div>

                <p className="text-gray-400 text-[11px] leading-[1.65] mb-4">
                  I'm always interested in discussing technology,
                  software development, artificial intelligence,
                  research ideas, and meaningful collaborations.
                </p>

                {/* Compact Contact Cards */}
                <div className="space-y-2">

                  <div className="contact-card flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">

                    <div className="w-8 h-8 shrink-0 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-300">
                      ✉
                    </div>

                    <div>
                      <p className="text-[8px] text-gray-500 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-[11px] text-gray-200 font-semibold">
                        Send me a message
                      </p>
                    </div>

                  </div>

                  <div className="contact-card flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">

                    <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-300">
                      ◈
                    </div>

                    <div>
                      <p className="text-[8px] text-gray-500 uppercase tracking-wider">
                        Interests
                      </p>
                      <p className="text-[11px] text-gray-200 font-semibold">
                        AI • Software • Research
                      </p>
                    </div>

                  </div>

                  <div className="contact-card flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">

                    <div className="w-8 h-8 shrink-0 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-300">
                      ↗
                    </div>

                    <div>
                      <p className="text-[8px] text-gray-500 uppercase tracking-wider">
                        Collaboration
                      </p>
                      <p className="text-[11px] text-gray-200 font-semibold">
                        Let's build something meaningful
                      </p>
                    </div>

                  </div>

                </div>

                {/* Availability */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-[9px] text-gray-400">
                    Open to meaningful conversations
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT PANEL */}
            <div
              className="contact-enter contact-border relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
              style={{ animationDelay: "250ms" }}
            >

              <div className="relative h-full rounded-2xl bg-[#10101d] p-4 sm:p-5 overflow-hidden">

                <div className="contact-glow absolute -top-16 right-0 w-44 h-44 rounded-full bg-purple-500/15 blur-[75px]" />

                <div className="relative z-10">

                  {/* Form Heading */}
                  <div className="flex items-center justify-between mb-4">

                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white">
                        Send a Message
                      </h3>
                      <p className="text-[9px] text-gray-500 mt-1">
                        I'll be happy to hear from you.
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-lg">
                      ✉
                    </div>

                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3"
                  >

                    {/* Name + Email Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                      <div>

                        <label
                          htmlFor="contact-name"
                          className="block text-[9px] text-gray-400 font-semibold mb-1.5"
                        >
                          Your Name
                        </label>

                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="contact-input w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-[11px] placeholder:text-gray-600"
                        />

                      </div>

                      <div>

                        <label
                          htmlFor="contact-email"
                          className="block text-[9px] text-gray-400 font-semibold mb-1.5"
                        >
                          Your Email
                        </label>

                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="contact-input w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-[11px] placeholder:text-gray-600"
                        />

                      </div>

                    </div>

                    {/* Message */}
                    <div>

                      <label
                        htmlFor="contact-message"
                        className="block text-[9px] text-gray-400 font-semibold mb-1.5"
                      >
                        Your Message
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        rows="3"
                        required
                        className="contact-input w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-[11px] placeholder:text-gray-600 resize-none"
                      />

                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="contact-send w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white text-[11px] font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >

                      {loading ? (
                        <>
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="text-sm">↗</span>
                        </>
                      )}

                    </button>

                  </form>

                  <p className="text-center text-[8px] text-gray-600 mt-2">
                    Your message will be sent securely through EmailJS.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div
            className="contact-enter text-center mt-3"
            style={{ animationDelay: "350ms" }}
          >
            <p className="text-[8px] tracking-[0.2em] text-gray-500 uppercase">
              Thank you for visiting my portfolio
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
