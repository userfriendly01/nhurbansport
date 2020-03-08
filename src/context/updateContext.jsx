//pass in the update function duhh
export const updateAdminText = (id, updatedText, updateAdminContext) => {
  database
  .ref("Admin")
  .child("Text")
  .child(id).set(updatedText).then(() => {
    updateAdminContext();
  })
  .catch(error => {
    console.log(error);
  });
};