import persAddFk from "./pers.add-fk"
import emailAddFk from "./email.add-fk";
import addrAddFk from "./addr.add-fk";
import fitnessAddFk from "./fitness.add-fk";

export default async function addFkAll() {
  return Promise.all([
    persAddFk().save(),
    emailAddFk().save(),
    addrAddFk().save(),
    fitnessAddFk().save()
  ])
}