import { DiscussionEmbed } from 'disqus-react';

export function DisqusComments() {
  const shortname = (import.meta as any).env?.VITE_DISQUS_SHORTNAME || 'https-sg-home-care-vercel-app';

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: window.location.href,
          identifier: window.location.pathname,
          title: "SG Home Care",
        }}
      />
    </div>
  );
}





