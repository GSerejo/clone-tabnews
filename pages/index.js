export default function Home() {
  const colors = {
    legoBlue: "#0055ad",
    legoYellow: "#ffcf00",
    bgGray: "#f0f0f0",
    dark: "#222",
  };

  return (
    <>
      <h1>Vida!</h1>
      <h2>Eu te mandei isso aqui so para dizer o quanto eu te amo! hihi</h2>

      <iframe
        data-testid="embed-iframe"
        style={{ "border-radius": "12px" }}
        src="https://open.spotify.com/embed/track/4WbkVm4eW824meQyaf4qfv?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default Home;
