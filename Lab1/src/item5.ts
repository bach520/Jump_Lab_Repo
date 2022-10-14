let age5: number;
age5 = '12' as any;
age5 += 1; // OK; at runtime, age is now "121"

//=================================================
//=================================================

interface Person {
    firstName: string;
    last: string;
}
const formatName = (p: Person) => `${p.firstName} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

//=================================================
//=================================================

interface ComponentProps {
    onSelectItem: (id: number) => void;
}
function renderSelector(props: ComponentProps) { /* ... */ }
let selectedId: number = 0;
function handleSelectItem(item: any) {
 selectedId = item.id;
}
renderSelector({onSelectItem: handleSelectItem});
