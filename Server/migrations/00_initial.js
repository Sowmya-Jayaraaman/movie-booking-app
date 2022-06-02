

async function up(context, models) {

  try { 
    for (let i of Object.values(models)) {
      await i.sync();
      // await db.sequelize.sync();
    }
    console.log("The table for all the models was just created!");
  } catch (error) {
    console.error('Unable to sync data:', error);
  }

}

async function down(context, models) {

  try { 
        for (let i of Object.values(models)) {
          await i.drop();
        }
        console.log("All tables dropped!");
      } catch (error) {
        console.error('Unable to drop data:', error);
      }

}

module.exports = { up, down };

