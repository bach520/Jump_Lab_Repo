"use strict";
let age5;
age5 = '12';
age5 += 1; // OK; at runtime, age is now "121"
const formatName = (p) => `${p.firstName} ${p.last}`;
const formatNameAny = (p) => `${p.first} ${p.last}`;
function renderSelector(props) {
}
let selectedId = 0;
function handleSelectItem(item) {
    selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });
