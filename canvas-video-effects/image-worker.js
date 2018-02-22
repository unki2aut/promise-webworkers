// simple image manipulation to make the image more red
onmessage = function(event) {
  const imageData = event.data.imageData;
  const dst = imageData.data;

  // Image Processing goes here
  for (let i = 0; i < dst.length; i += 4) {
    dst[i] += 70;
  }

  postMessage({
    dstData: imageData
  });
};

// More resource intensive Sepia calculations from
// https://www.htmlgoodies.com/html5/client/using-web-workers-to-improve-performance-of-image-manipulation.html
/* function noise() {
  return Math.random() * 0.5 + 0.5;
}

function clamp(component) {
  return Math.max(Math.min(255, component), 0);
}

function colorDistance(scale, dest, src) {
  return clamp(scale * dest + (1 - scale) * src);
}

onmessage = function(event) {
  const imageData = event.data.imageData,
        dst = imageData.data;

  for (let i = 0; i < dst.length; i += 4) {
    const r = dst[i];
    const g = dst[i + 1];
    const b = dst[i + 2];

    dst[i] = colorDistance(noise(), (r * 0.393) + (g * 0.769) + (b * 0.189), r);
    dst[i + 1] = colorDistance(noise(), (r * 0.349) + (g * 0.686) + (b * 0.168), g);
    dst[i + 2] = colorDistance(noise(), (r * 0.272) + (g * 0.534) + (b * 0.131), b);
  }

  postMessage({
    dstData: imageData
  });
}; */