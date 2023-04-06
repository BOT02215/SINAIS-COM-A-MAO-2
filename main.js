classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6lV7qtwkM/model.json", ModelLoaded)

function ModelLoaded() {
    console.log("Model Loaded")
}

Webcam.set({
    width: 350,
    height: 250,
    imageFormat: "png",
    pngQuality: 100
})

Webcam.attach("#camera")

function tira_fruta() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Foto").innerHTML = "<img id='capturedImage' src='" + data_uri + "'>"
    })
}

function sinal() {
    lmage = document.getElementById("capturedImage")
    classifier.classify(lmage, result)
}

function result(error, resultado) {
    if (error) {
        console.error(error)
    }
    else {
        prevision1 = resultado[0].label
        prevision2 = resultado[1].label

        if (prevision1 == "Legal") {
            document.getElementById("emoji1").innerHTML = "&#128077"
        }
        else if (prevision1 == "Tranquilo") {
            document.getElementById("emoji1").innerHTML = "&#129305"
        }
        else if (prevision1 == "Paz e Amor") {
            document.getElementById("emoji1").innerHTML = "	&#9996"
        }
        else if (prevision1 == "Chato") {
            document.getElementById("emoji1").innerHTML = "&#128078"
        }
        else {
            document.getElementById("emoji1").innerHTML = "&#128074"
        }

        if (prevision2 == "Legal") {
            document.getElementById("emoji2").innerHTML = "&#128077"
        }
        else if (prevision2 == "Tranquilo") {
            document.getElementById("emoji2").innerHTML = "&#129305"
        }
        else if (prevision2 == "Paz e Amor") {
            document.getElementById("emoji2").innerHTML = "	&#9996"
        }
        else if (prevision2 == "Chato") {
            document.getElementById("emoji2").innerHTML = "&#128078"
        }
        else {
            document.getElementById("emoji2").innerHTML = "&#128074"
        }
    }
}
