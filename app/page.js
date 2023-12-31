import Image from "next/image";

export default function Home() {
  const jumbotronStyle = {
    backgroundImage: "url('/images/jumbotrondog.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div className="p-12 text-white" style={jumbotronStyle}>
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="text-xl mt-4">
          This is a Tailwind CSS Jumbotron in a React application.
        </p>
      </div>
      <div>
        <h1>Welcome to Pupster!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
          diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque et dui id justo finibus sollicitudin at et metus. Ut
          feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
          vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
          turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc
          non egestas tristique. Proin hendrerit efficitur malesuada. Mauris
          lorem urna, sodales accumsan quam non, tristique tempor erat. Nullam
          non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis
          non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac
          quam laoreet cursus. Praesent suscipit orci neque, vestibulum
          tincidunt augue tincidunt non. Duis consequat mattis tortor vitae
          mattis. Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
          porttitor. Sed malesuada molestie velit ac viverra. Quisque a
          ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla
          tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta
          accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
          Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula
          ultricies. Maecenas vel porta augue. Fusce mauris ex, dignissim et
          lacinia ut, tempus eget nibh. Etiam ut massa efficitur, gravida sapien
          non, condimentum sapien. Suspendisse massa tortor, facilisis in neque
          sit amet, scelerisque elementum tortor. Nullam eget nibh sit amet odio
          lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
          Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi,
          non mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit
          eu, ultricies vitae lacus. Nunc vehicula, erat eget laoreet
          condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
          nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget
          lorem. Maecenas vestibulum volutpat orci eu pharetra. Praesent vel
          blandit ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis
          libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem
          rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
          interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum
          mauris quis, laoreet massa
        </p>
      </div>
    </div>
  );
}
