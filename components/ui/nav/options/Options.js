export default function Options({styles}) {
    return (
        <button className={`${styles.navText} pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 14 17" ><path d="M8.5 0H5.5V3H8.5V0Z" fill="currentColor"></path><path d="M0 5H14V7H10V17H8V13H6V17H4V7H0V5Z" fill="currentColor"></path></svg>
        </button>
    )
}