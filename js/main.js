let left = document.querySelector(".left");
let content = document.querySelector(".content");
let protos = document.querySelectorAll(".proto");

left.addEventListener("mousemove", event => {
  let moveProto = event.clientX * 0.05 + 4;
  let moveContent = event.clientX * 0.003;

  content.style.transform = `translateX(-${moveContent}%)`;

  protos.forEach(proto => {
    proto.style.transform = `translateX(${moveProto}%)`;
  });
});
