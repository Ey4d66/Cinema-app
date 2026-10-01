import { useState, type FormEvent } from 'react'
import { useParams } from 'react-router-dom'

const Review = () => {
  const { id } = useParams()

  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const review = {
      movieId: id,
      rating,
      comment,
    }

    localStorage.setItem(`review-${id}`, JSON.stringify(review))
    alert('Review saved')
  }

  return (
    <main>
      <h1>Review Movie</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Rating from 1 to 10"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
        />

        <textarea
          placeholder="Write your review"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />

        <button type="submit">Save Review</button>
      </form>
    </main>
  )
}

export default Review