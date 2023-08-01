type Size =
    'heading-l' | 
    'heading-m' | 
    'heading-s' | 
    'heading-s-variant' | 
    'body' | 
    'body-variant'


export const SizeMapping: Record<Size, string> = {
    'heading-l': 'heading-l',
    'heading-m': 'heading-m',
    'heading-s': 'heading-s',
    'heading-s-variant': 'heading-s-variant',
    'body': 'body',
    'body-variant': 'body-variant',
}



export default Size