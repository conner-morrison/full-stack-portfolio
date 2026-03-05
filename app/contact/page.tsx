import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24 space-y-16">

      {/* Page Title */}

      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Contact me
        </h1>

        <p className="text-xl text-neutral-400">
          For engineering leadership opportunities, technical
          collaboration, or product discussions, feel free to reach out.
        </p>
      </div>


      {/* Contact Cards */}

      <div className="grid md:grid-cols-3 gap-8">

        {/* Location */}

        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">

          <h2 className="text-lg font-semibold text-white">
            Location
          </h2>

          <p className="text-neutral-400">
            1049 NW 178TH ST  
            Shoreline, WA 98177-3827
          </p>

          <a
            href="https://www.google.com/maps?q=1049+NW+178th+St+Shoreline+WA+98177"
            target="_blank"
            className="inline-block mt-2 text-blue-400 hover:underline"
          >
            View on Google Maps
          </a>

        </div>


        {/* Email */}

        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">

          <h2 className="text-lg font-semibold text-white">
            Email
          </h2>

          <p className="text-neutral-400">
            morrisonconner638@gmail.com
          </p>

          <a
            href="mailto:morrisonconner638@gmail.com"
            className="inline-block mt-2 px-5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
          >
            Send Email
          </a>

        </div>


        {/* Phone */}

        <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">

          <h2 className="text-lg font-semibold text-white">
            Phone
          </h2>

          <p className="text-neutral-400">
            (206) 318-0677
          </p>

          <p className="text-sm text-neutral-500">
            Washington State Local Number
          </p>

        </div>

      </div>

    </div>
  );
}