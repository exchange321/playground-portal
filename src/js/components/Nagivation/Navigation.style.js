import styled from 'styled-components';

export const NavLink = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.navLinkPaddingY} 0`};
  color: ${({ show, active, theme }) => ((show || active) ? theme.navbarDarkActiveColor : theme.navbarDarkColor)};

  &:hover, &:focus {
    text-decoration: none;
    color: ${({ theme }) => theme.navbarDarkHoverColor};
  }

  &:disabled {
    color: ${({ theme }) => theme.navbarDarkDisabledColor};
  }

  @media (min-width: ${({ theme }) => theme.gridBreakpoints.lg}) {
    padding-right: ${({ theme }) => theme.navbarNavLinkPaddingX};
    padding-left: ${({ theme }) => theme.navbarNavLinkPaddingX};
  }
`;

export const NavItem = styled.li`
  display: list-item;
  flex-direction: row;
  list-style: none;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.gridBreakpoints.lg}) {
    flex-direction: row;
  }
`;

export const Collapse = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.gridBreakpoints.lg}) {
    display: flex;
    flex-basis: auto;
  }
`;

export const NavBarBrand = styled.a`
  display: inline-block;
  padding-top: ${({ theme }) => theme.navbarBrandPaddingY};
  padding-bottom:  ${({ theme }) => theme.navbarBrandPaddingY};
  margin-right: ${({ theme }) => theme.navbarPaddingX};
  font-size: ${({ theme }) => theme.navbarBrandFontSize};
  line-height: inherit;
  white-space: nowrap;
  color: ${({ theme }) => theme.navbarDarkBrandColor};

  &:hover, &:focus {
    text-decoration: none;
    color: ${({ theme }) => theme.navbarDarkBrandHoverColor};
  }
`;

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.navbarPaddingY} ${theme.navbarPaddingX}`};
  background-color: ${({ theme }) => theme.themeColors.dark};

  @media (min-width: ${({ theme }) => theme.gridBreakpoints.lg}) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;

export default {
  NavItem,
  NavLink,
  Nav,
  NavBar,
  NavBarBrand,
  Collapse,
};
