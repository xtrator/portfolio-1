export default function NavItem({ children, isSelected, onClick }) {
  const pClass = isSelected ? "p p-selected" : "p";
  return (
    <p onClick={onClick} className={pClass}>
      {children}
    </p>
  );
}
