const FavorisModel = require("../../schema/schemaFavori.js");


async function favorisInsert(req, res) {
  const { nameMovies, user_id } = req.body;
    const favoris = {
        nameMovies,
        user_id
      };
      // On check en base si le favmovies pour l'utilisateur existe déjà
      try {
        const findFav = await FavorisModel.findOne({
          nameMovies,
          user_id,
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