import React from 'react';

// Authentic Vector Logos for Construction & Quantity Surveying Software

export const AutoCADLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#E51937" />
    <path d="M24 10L12 36H18L20.5 30H27.5L30 36H36L24 10ZM24 18L26 25H22L24 18Z" fill="white" />
    <path d="M19 28H29L31 33H17L19 28Z" fill="#B3001B" opacity="0.6" />
  </svg>
);

export const PlanSwiftLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#2E7D32" />
    {/* Digital crosshair & takeoff ruler */}
    <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="2.5" strokeDasharray="3 3" />
    <circle cx="24" cy="24" r="6" fill="#FDD835" />
    <line x1="24" y1="6" x2="24" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="33" x2="24" y2="42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="6" y1="24" x2="15" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="33" y1="24" x2="42" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const CostXLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#6A1B9A" />
    {/* 3D BIM Cube with dynamic 'X' */}
    <path d="M24 9L36 16V30L24 37L12 30V16L24 9Z" stroke="#E1BEE7" strokeWidth="2" fill="#4A148C" />
    <path d="M24 9V37M12 16L36 30M36 16L12 30" stroke="#BA68C8" strokeWidth="1.5" />
    <text x="24" y="27" textAnchor="middle" fill="#FFD54F" fontSize="13" fontWeight="bold" fontFamily="sans-serif">X</text>
  </svg>
);

export const RevitLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#007996" />
    {/* Autodesk Revit 'R' ribbon */}
    <path d="M14 11H25C29 11 32 13.5 32 17.5C32 20.5 30 23 27 24L34 37H27L21 26H19V37H14V11ZM19 21.5H24.5C26.5 21.5 27.5 20.5 27.5 18.5C27.5 16.5 26.5 15.5 24.5 15.5H19V21.5Z" fill="white" />
  </svg>
);

export const SketchUpLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#D32F2F" />
    {/* SketchUp Isometric Folding Cube */}
    <path d="M24 10L37 17.5V32.5L24 40L11 32.5V17.5L24 10Z" fill="#B71C1C" />
    <path d="M24 10L37 17.5L24 25L11 17.5L24 10Z" fill="#EF5350" />
    <path d="M24 25V40L37 32.5V17.5L24 25Z" fill="#E53935" />
    <path d="M24 25V40L11 32.5V17.5L24 25Z" fill="#C62828" />
    <path d="M17 21L24 25L31 21M24 25V33" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ExcelLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="10" fill="#107C41" />
    {/* Excel Workbook Grid */}
    <rect x="22" y="14" width="16" height="20" rx="2" fill="#33C481" />
    <line x1="22" y1="20" x2="38" y2="20" stroke="white" strokeWidth="1.5" />
    <line x1="22" y1="27" x2="38" y2="27" stroke="white" strokeWidth="1.5" />
    <line x1="30" y1="14" x2="30" y2="34" stroke="white" strokeWidth="1.5" />
    {/* 'X' tile in front */}
    <rect x="10" y="15" width="16" height="18" rx="2" fill="#0E5C2F" filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.4))" />
    <text x="18" y="29" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">X</text>
  </svg>
);
