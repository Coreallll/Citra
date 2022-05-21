const contactsSelect = () => {
  const element = document.querySelector('.contacts__select');
  const choices = new Choices(element, {
    searchEnabled:false,
  });
}

contactsSelect();