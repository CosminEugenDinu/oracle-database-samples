import appuserCreateTb from "./appuser.create-tb";
import sportCreateTb from "./sport.create-tb";
import persCreateTb from "./pers.create-tb";
import emailCreateTb from "./email.create-tb";
import addrCreateTb from "./addr.create-tb";
import fitnessCreateTb from "./fitness.create-tb";

export default async function createTbAll() {
  return Promise.all([
    appuserCreateTb().save(),
    sportCreateTb().save(),
    persCreateTb().save(),
    emailCreateTb().save(),
    addrCreateTb().save(),
    fitnessCreateTb().save()
  ])
}
