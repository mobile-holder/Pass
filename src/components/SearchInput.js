import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../colors/Theme';
import PropTypes from 'prop-types';

const StyledSearchInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.mono400,
}))`
    width: 260px;
    height: 45px;
    padding: 10px;
    background-color: ${theme.mono150};
    border: 3px solid;
    borderColor: ${theme.mono800};
    font-size: 20px;
    color: ${theme.mono800};
    margin: 5px;
    `;

const SearchInput = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
    
    return <StyledSearchInput 
                placeholder={placeholder}
                maxLength={15}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                keyboardAppearance="light"

                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
};

SearchInput.propTypes= {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    //onSubmitEditing: PropTypes.func.isRequired,
}; 

export default SearchInput;