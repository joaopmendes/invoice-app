'use client'
type OverlayProps = {
    close: () => void
}
export const ModalOverlay: React.FC<OverlayProps> = ({close}) => {
    return (
        <div onClick={close} className={'overlay bg-dark z-20 opacity-50 '}></div>
    );
};