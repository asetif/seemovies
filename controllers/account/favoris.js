const FavorisModel = require("../../schema/schemaFavori.js");
const users = require("../../schema/schemaUser.js");

/**
 * Check if movie can be added as favorite by user
 * then do it
 * @param req
 * @param res
 * @param authToken
 * @returns {Promise<*>}
 */
async function favorisInsert(req, res, authToken) {
  let user = await users.findOne({ token: authToken._id})
  const { nameMovies } = req.body;
    const favoris = {
        nameMovies,
        user_id: user
      };
      
      // Check if movie's already fav
      try {
        const findFav = await FavorisModel.findOne({
          nameMovies,
          user,
        });
        if (findFav) {
          return res.status(400).json({
            text: "Le favoris existe déjà"
          });
        }
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
      try {
        // Saves movie as favorite
        const favData = new FavorisModel(favoris);
        await favData.save();
        return res.status(200).json({
          text: "Succès",
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    
}
exports.favorisInsert = favorisInsert;