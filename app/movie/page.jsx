
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

async function Movie() {
   
const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const response = await fetch(url, options);
	const data = await response.json();
	const main_data = data.titles;
    // console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                if(curElem.jawSummary.backgroundImage.url)
                                return <MovieCard key={curElem.id} {...curElem} />;
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Movie