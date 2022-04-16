import qRun from "./query/qRun";
import createTbAll from "./schema/createTbAll";
import addFkAll from "./schema/addFkAll";
import dropTbAll from "./schema/dropTbAll";
import appuserInsertAll from "./query/appuser.insert-all.q";
import appuserSelectAll from "./query/appuser.select-all.q";
import appuserDeleteAll from "./query/appuser.delete-all.q";
import sportInsertAll from "./query/sport.insert-all.q";
import sportSelectAll from "./query/sport.select-all.q";
import sportDeleteAll from "./query/sport.delete-all.q";
import persInsertAll from "./query/pers.insert-all.q";
import persSelectAll from "./query/pers.select-all.q";
import persDeleteAll from "./query/pers.delete-all.q";
import emailInsertAll from "./query/email.insert-all.q";
import emailSelectAll from "./query/email.select-all.q";
import emailDeleteAll from "./query/email.delete-all.q";
import addrInsertAll from "./query/addr.insert-all.q";
import addrSelectAll from "./query/addr.select-all.q";
import addrDeleteAll from "./query/addr.delete-all.q";
import fitnessInsertAll from "./query/fitness.insert-all.q";
import fitnessSelectAll from "./query/fitness.select-all.q";
import fitnessDeleteAll from "./query/fitness.delete-all.q";

import appuserCreateTb from "./schema/appuser.create-tb";

(async () => {
  // const appuserCreateQ = await appuserCreateTb().save();
  // await qRun(appuserCreateQ);

  // ============= DROP ALL ===================================
  // const dropAllQ = await dropTbAll().save();
  // await qRun(dropAllQ);
  // // ============= CREATE ALL =================================
  // const createAllQ = await createTbAll();
  // await Promise.all(createAllQ.map(q => {
  //   qRun(q);
  // }))
  // // ============= ADD FK ALL =================================
  // const addFkAllQ = await addFkAll();
  // await Promise.all(addFkAllQ.map(q => {
  //   qRun(q);
  // }))

  // ============= Insert all users ==========================
  const usernames = ["Dinca", "Eugen", "Seller", "Camelina", "Radu"];
  // const appuserInsertAllQ = await appuserInsertAll(usernames).save();
  // await qRun(appuserInsertAllQ);
  // ============= Select all users =============================
  // const appuserSelectAllQ = await appuserSelectAll().save();
  // await qRun(appuserSelectAllQ)
  // ============= Delete all users =============================
  // const appuserDeleteAllQ = await appuserDeleteAll().save();
  // await qRun(appuserDeleteAllQ);

  // ============= Insert all sports ==========================
  const sports: string[] = [
    "Sărit coarda",
    "Flotări",
    "Genoflexiuni",
    "Mersul piticului",
    "Abdomene",
  ];
  // const sportInsertAllQ = await sportInsertAll(sports).save();
  // await qRun(sportInsertAllQ);
  // ============= Select all sports =============================
  // const sportSelectAllQ = await sportSelectAll().save();
  // await qRun(sportSelectAllQ)
  // ============= Delete all sports =============================
  // const sportDeleteAllQ = await sportDeleteAll().save();
  // await qRun(sportDeleteAllQ);

  // ============= Insert all person ==========================
  const persons: [name: string, username: string, chromozome: string][] = [
    ["Fratelo Dinca", usernames[0], "y"],
    ["Eugen Cosmin", usernames[1], "y"],
    ["Seller Adelin", usernames[2], "y"],
    ["Camelina German", usernames[3], "x"],
    ["Radu Voicu", usernames[4], "y"],
  ];
  // const persInsertAllQ = await persInsertAll(persons).save();
  // await qRun(persInsertAllQ);
  // // ============= Select all person =============================
  // const persSelectAllQ = await persSelectAll().save();
  // await qRun(persSelectAllQ)
  // ============= Delete all person =============================
  // const persDeleteAllQ = await persDeleteAll().save();
  // await qRun(persDeleteAllQ);

  // ============= Insert all email ==========================
  const emails: [email: string, name: string][] = [
    ["dinca@email.ro", persons[0][0]],
    ["eugen@email.ro", persons[1][0]],
    ["seller@email.ro", persons[2][0]],
    ["camelina@email.ro", persons[3][0]],
    ["radu@email.ro", persons[4][0]],
  ];
  // const emailInsertAllQ = await emailInsertAll(emails).save();
  // await qRun(emailInsertAllQ);
  // // ============= Select all email =============================
  // const emailSelectAllQ = await emailSelectAll().save();
  // await qRun(emailSelectAllQ)
  // // ============= Delete all email =============================
  // const emailDeleteAllQ = await emailDeleteAll().save();
  // await qRun(emailDeleteAllQ);

  // ============= Insert all addr ==========================
  const addresses: [addr: string, persName: string][] = [
    ["Str. Dorofteilor, nr. 2", persons[0][0]],
    ["Str. Cosminilor, nr. 5", persons[1][0]],
    ["Str. Seller, nr. 6", persons[2][0]],
    ["Str. Camelinelor, nr. 5", persons[3][0]],
    ["Str. Radu Vodă, nr. 10", persons[4][0]],
  ];
  // const addrInsertAllQ = await addrInsertAll(addresses).save();
  // await qRun(addrInsertAllQ);
  // // ============= Select all addr =============================
  // const addrSelectAllQ = await addrSelectAll().save();
  // await qRun(addrSelectAllQ)
  // // ============= Delete all addr =============================
  // const addrDeleteAllQ = await addrDeleteAll().save();
  // await qRun(addrDeleteAllQ);

  // ============= Insert all fitness ==========================
  const fitnessList: [
    persName: string,
    date: string,
    sport: string,
    duration: number
  ][] = [
    [persons[0][0], "1-APR-2022", sports[0], 40],
    [persons[0][0], "1-APR-2022", sports[1], 20],
    [persons[0][0], "2-APR-2022", sports[2], 10],
    [persons[0][0], "2-APR-2022", sports[3], 10],

    [persons[1][0], "1-APR-2022", sports[2], 60],
    [persons[1][0], "1-APR-2022", sports[1], 30],
    [persons[1][0], "3-APR-2022", sports[3], 20],
    [persons[1][0], "3-APR-2022", sports[3], 20],

    [persons[2][0], "1-APR-2022", sports[0], 60],
    [persons[2][0], "1-APR-2022", sports[1], 30],
    [persons[2][0], "4-APR-2022", sports[3], 40],
    [persons[2][0], "4-APR-2022", sports[3], 20],

    [persons[3][0], "1-APR-2022", sports[0], 60],
    [persons[3][0], "1-APR-2022", sports[1], 50],
    [persons[3][0], "5-APR-2022", sports[3], 20],
    [persons[3][0], "5-APR-2022", sports[3], 20],

    [persons[4][0], "1-APR-2022", sports[2], 30],
    [persons[4][0], "1-APR-2022", sports[1], 30],
    [persons[4][0], "6-APR-2022", sports[2], 10],
    [persons[4][0], "6-APR-2022", sports[3], 20],
  ];
  // const fitnessInsertAllQ = await fitnessInsertAll(fitnessList).save();
  // await qRun(fitnessInsertAllQ);
  // // ============= Select all fitness =============================
  // const fitnessSelectAllQ = await fitnessSelectAll().save();
  // await qRun(fitnessSelectAllQ)
  // // ============= Delete all fitness =============================
  // const fitnessDeleteAllQ = await fitnessDeleteAll().save();
  // await qRun(fitnessDeleteAllQ);

  // await qRun(`
  // select * from sport 
  // `)
})();
