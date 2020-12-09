const FavorisModel = require("../../schema/schemaFavori.js");
const users = require("../../schema/schemaUser.js");

async function favorisInsert(req, res, authtoken) {
  var user = await users.findOne({ token: authtoken._id})
  const { nameMovies } = req.body;
    const favoris = {
        nameMovies,
        user_id: user
      };
      
      // On check en base si le favmovies pour l'utilisateur existe déjà
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
        // Sauvegarde de le favmovies en base
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