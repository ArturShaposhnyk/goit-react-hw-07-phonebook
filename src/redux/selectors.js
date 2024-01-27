export const selectAllContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const { contacts } = selectAllContacts(state);
  const filter = selectFilter(state);
  if (!filter) {
    return contacts;
  } else {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );

    if (normalizedFilter && !filteredContacts.length) {
      alert('No contacts matching your request');
    }
    return filteredContacts;
  }
};
