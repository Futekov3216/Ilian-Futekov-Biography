
const reused = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}
export const enterAnimation = {
    Hero: {
        ...reused,
        ...{transition: { duration: 0.5, delay: 0.1 }}
    },
    Experience: {
        ...reused,
        transition: { duration: 0.5, delay: 0.6 }
    },
    Education: {
        ...reused,
        transition: { duration: 0.5, delay: 1.6 }
    },
    Skills: {
        ...reused,
        transition: { duration: 0.5, delay: 1.1 }
    },
}