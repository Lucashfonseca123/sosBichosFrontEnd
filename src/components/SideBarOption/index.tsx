import React from 'react';
import { IconBaseProps } from 'react-icons';
import { MdChevronLeft } from 'react-icons/md';
import { Container } from './styles';

export interface IProps {
  isOpen: boolean;
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  isSelected?: boolean;
}

const SideBarOption: React.FC<IProps> = ({
  isOpen,
  icon: Icon,
  title,
  isSelected,
}) => {
  return (
    <Container isOpen={isOpen} isSelected={isSelected || false}>
      <div className="icon">{Icon && <Icon />}</div>
      <div className="title">
        <h3>{title}</h3>
      </div>

      {isSelected || (
        <div className="icon">
          <MdChevronLeft size={24} />
        </div>
      )}
    </Container>
  );
};

export default SideBarOption;
