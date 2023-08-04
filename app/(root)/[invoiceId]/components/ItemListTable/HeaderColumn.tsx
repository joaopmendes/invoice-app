import Typography from '@/components/ui/typography/Typography';

type HeaderColumnProps = {
  alignLeft?: boolean;
};
const HeaderColumn: React.FC<React.PropsWithChildren<HeaderColumnProps>> = ({
  children,
  alignLeft,
}) => {
  return (
    <div className={`w-1/4 py-4 px-8 ${alignLeft ? 'text-left' : 'text-center'}`}>
      <Typography tag={'div'} color={'dark-grey'} size={'body'}>
        {children}
      </Typography>
    </div>
  );
};

export default HeaderColumn;
