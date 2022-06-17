

async function up(context, db) {

  console.log("Inside up function");

  try {
    await db.sequelize.sync();
    // for (let i of Object.values(models)) {
    //   await i.sync();
    // }
    console.log("The table for all the models was just created!");
  } catch (error) {
    console.error('Unable to sync data:', error);
  }

}

async function down(context, db) {

  console.log("Inside down function");

  try {
    await db.sequelize.drop();

    // for (let i of Object.values(models)) {
    //   await i.drop();
    // }
    console.log("All tables dropped!");
  } catch (error) {
    console.error('Unable to drop data:', error);
  }

}

module.exports = { up, down };

