import video from "../constants/VideoConstants";

export default function Card({title, content}) {
  return (
    <div className="card h-[250px] w-[400px] shadow-lg rounded-lg p-4 flex flex-col">
      <video
        src={video.culto_jovenes}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-md"
        width={400}
        height={250}
      >
        Tu navegador no soporta video HTML5.
      </video>
    </div>
  );
}