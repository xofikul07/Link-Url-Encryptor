; (async () => {
  const model = await tf.loadLayersModel('./model.json');

  document.getElementById(`loading`).hidden = true
  document.getElementById(`upload`).hidden = false

  document.getElementById('input').addEventListener('change', function(evt) {
    let tgt = evt.target || window.event.srcElement,
      files = tgt.files;

    console.log(files)

    if(files.length !== 1) return;

    document.getElementById(`loading`).hidden = false
    document.getElementById(`upload`).hidden = true

    document.getElementById(`loadingText`).innerText = `Getting image`

    if (FileReader && files && files.length) {
      let fr = new FileReader();
      fr.onload = async function() {
        document.getElementById("inputImage").src = fr.result;
