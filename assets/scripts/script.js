let remainingHours = 6
let remainingMinutes = 0
let remainingSeconds = 0

const countHour = document.querySelector(".j_count_hour")
const countMinute = document.querySelector(".j_count_minute")
const countSecond = document.querySelector(".j_count_second")

const imagesToReplace = [...document.querySelectorAll(".j_image_to_replace")].map(element => element.cloneNode(true))
const singleImage = (container) => container.querySelector(".j_image_to_replace")
const imageContainers = document.querySelectorAll(".j_image_wrapper")
const imageInfoContainers = document.querySelectorAll(".j_image_info_wrapper")

// COUNTDOWN
countHour.innerText = String(remainingHours).padStart(2, "0")
countMinute.innerText = String(remainingMinutes).padStart(2, "0")
countSecond.remainingSeconds = String(remainingSeconds).padStart(2, "0")

let countdown = setInterval(() => {
    if (remainingSeconds < 0) {
        remainingSeconds = 59
        remainingMinutes--
    }

    if (remainingMinutes < 0) {
        remainingMinutes = 59
        remainingHours--
    }

    if (remainingHours === 0 && remainingMinutes === 0 && remainingSeconds === 0) {
        clearInterval(countdown)
    }

    countHour.innerText = String(remainingHours).padStart(2, "0")
    countMinute.innerText = String(remainingMinutes).padStart(2, "0")
    countSecond.innerText = String(remainingSeconds).padStart(2, "0")

    remainingSeconds--
}, 1000);

// REPLACE IMAGES
imageContainers.forEach((container, index) => {
    if (window.innerWidth >= 992) {
        container.append(imagesToReplace[index])
        singleImage(imageInfoContainers[index]).remove()
    }
})

window.addEventListener("resize", () => {
    imageContainers.forEach((container, index) => {
        if (window.innerWidth >= 992) {
            container.append(imagesToReplace[index])
            singleImage(imageInfoContainers[index]) && singleImage(imageInfoContainers[index]).remove()            
        } else {
            imageInfoContainers[index].append(imagesToReplace[index])
            singleImage(container) && singleImage(container).remove()
        }
    })
})