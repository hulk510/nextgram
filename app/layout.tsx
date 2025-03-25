import "./global.css";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
  play: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {props.modal}
        {props.children}
        {props.play}
        <div id='modal-root' />
      </body>
    </html>
  );
}
