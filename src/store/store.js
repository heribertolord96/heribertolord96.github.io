import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './slices/auth';
// import { documentsSlice } from './slices/documents';
// import { modalSearchSlice } from './slices/modalSearch/modalSearchSlice';
import { uiSlice } from './slices/ui';
// import { usersSlice } from './slices/users';
// import { contactsSlice } from './slices/contacts';
// import { casesSlice } from './slices/cases';
// import { detailFieldHelperSlice } from './slices/detailFieldHelper';
// import { checklistsSlice } from './slices/checklists';
// import { optionsReferenceSlice } from './slices/optionsReference';
// import { itemsSlice } from './slices/items';
// import { CommentsSlice } from './slices/form/commentsSlice';
// import { navBarSlice } from './slices/navbar';
// import { paginationSlice } from './slices/pagination';
// import { selectSlice } from './slices/selectsInputs/selectSlice';
import { dashboardSlice } from './slices/dashboard/dashboardSlice';
// import { picklistSlice } from './slices/picklist/picklistSlice';

export const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    // checklists: checklistsSlice.reducer,
    // comments: CommentsSlice.reducer,
    // detailFieldHelper: detailFieldHelperSlice.reducer,
    // documents: documentsSlice.reducer,
    // immvisasCases: immvisasCasesSlice.reducer,
    // immvisasItems: immvisasItemsSlice.reducer,
    // items: itemsSlice.reducer,
    // modalSearch: modalSearchSlice.reducer,
    // pagination: paginationSlice.reducer,
    // picklist: picklistSlice.reducer,
    // users: usersSlice.reducer,
    // whatsApp: whatsAppSlice.reducer,
    // cases: casesSlice.reducer,
    // contacts: contactsSlice.reducer,
    dashboard: dashboardSlice.reducer,
    // navBarInfo: navBarSlice.reducer,
    // optionsReference: optionsReferenceSlice.reducer,
    // selectInputs: selectSlice.reducer,
    ui: uiSlice.reducer,
  },
});
