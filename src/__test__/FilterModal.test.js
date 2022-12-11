import { cleanup, render, screen } from '@testing-library/react';
// , fireEvent
import FilterImages from "../Components/FilterImages"

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ModalFilterComponent from '../Components/ModalFilterComponent';

afterEach(cleanup);

describe('If the modal will show if we click the filter button', () => {
    const initialState = { output: 10 }
    const mockStore = configureStore()
    let store
    test('Open Filter Modal', () => {
        store = mockStore(initialState)
        render(<FilterImages />)
        //fireEvent.click(screen.getByText('Filter'))
        render(<Provider store={store}><ModalFilterComponent /></Provider>)

        expect(screen.getByText('Done')).toBeInTheDocument();
    })
});