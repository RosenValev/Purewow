import styles from './RecipieList.module.css'

export default function RecipieList() {
    return (
        <div className={styles['recipie-container']}>
            <div className={styles["recipe-details"]}>
                <div className={styles["recipe-title"]}>Spicy Lemon-Ginger Chicken Soup</div>
                <img
                    className={styles["recipe-image"]}
                    src="https://publish.purewow.net/wp-content/uploads/sites/2/2019/09/spicy-lemon-ginger-chicken-soup-recipe.jpg?resize=728%2C921"
                    alt="Spicy Lemon-Ginger Chicken Soup"
                />
                <div className={styles["recipe-description"]}>
                    Customizable soup with deep flavors. Broth prepared the day before for
                    enhanced taste. Options to add turmeric, rice, or pasta for variation.
                </div>
                <div className={styles["recipe-time"]}>
                    <p>
                        <strong>Prep Time:</strong> Swift (15 minutes)
                    </p>
                    <p>
                        <strong>Cook Time:</strong> Moderate (30 minutes)
                    </p>
                    <p>
                        <strong>Total Time:</strong> Efficient (45 minutes)
                    </p>
                    <p>
                        <strong>Serving Portions:</strong> Generous (Serves 8)
                    </p>
                </div>
                <div className={styles["recipe-ingredients"]}>
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>1 whole chicken (4 pounds, innards removed)</li>
                        <li>1 large yellow onion (peeled and chopped)</li>
                        <li>2 medium carrots (chopped)</li>
                        <li>2 celery stalks (chopped)</li>
                        <li>1 large head garlic (cut crosswise)</li>
                        <li>½ to 1 jalapeño (cut lengthwise, plus more for garnish)</li>
                        <li>Two 3-inch pieces ginger (peeled and chopped)</li>
                        <li>1 large bunch fresh parsley (plus more for garnish)</li>
                        <li>1 tablespoon coriander seeds</li>
                        <li>1 tablespoon kosher salt</li>
                        <li>2 teaspoons freshly ground black pepper</li>
                        <li>6 ounces fresh spinach or other tender greens</li>
                        <li>2 lemons (thinly sliced)</li>
                    </ul>
                </div>
                <div className={styles["recipe-directions"]}>
                    <h2>Directions:</h2>
                    <ol>
                        <li>
                            Combine all ingredients (except spinach, shredded chicken, jalapeño,
                            and lemon slices) in a large Dutch oven or saucepan. Add water to
                            cover. Boil, then simmer covered until chicken is tender (55-60
                            minutes).
                        </li>
                        <li>
                            Transfer chicken, shred, and strain the stock into a saucepan. Keep
                            warm over low heat. Add salt if needed. Divide spinach, shredded
                            chicken, jalapeño, and lemon slices among serving bowls. Top with hot
                            broth.
                        </li>
                    </ol>
                </div>
                <div className={styles["buttons-div"]}>
                    <button className={styles["edit-delete-button"]} type="submit">Edit</button>
                    <button className={styles["edit-delete-button"]} type="submit">Delete</button>
                </div>
            </div>
        </div>
    );

}