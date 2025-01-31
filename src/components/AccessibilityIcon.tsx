// AccessibilityIcon.tsx
import React from 'react';
import { FaUniversalAccess } from 'react-icons/fa';

interface AccessibilityIconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const AccessibilityIcon: React.FC<AccessibilityIconProps> = ({
  size = 32,
  color = 'currentColor',
  className = '',
}) => (
  <FaUniversalAccess
    size={size}
    color={color}
    className={`transition-transform transform hover:scale-110 ${className}`}
    aria-hidden="true"
  />
);

export default AccessibilityIcon;
