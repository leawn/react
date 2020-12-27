import styled from 'styled-components';
import { colors } from './global';

export const Main = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1280px;
  min-width: 1280px;
  display: flex;
  justify-content: center;
`;

export const JobContainer = styled.div`
  border: 1px solid ${colors.border};
  width: 600px;
`;

export const JobRow = styled.div`
  width: 100%;
  background: ${colors.jobBG};
  border-bottom: 1px solid ${colors.border};
  height: 72px;
  padding: 16px;
  &:last-child {
    border-bottom: none;
  }
`;

export const JobInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompanyLogo = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 100%;
  }
`;

export const JobDescription = styled.div`
  width: 240px;
`;

export const CompanyName = styled.h3`
  font-size: 14px;
  line-height: 14px;
  color: ${colors.secondary};
  margin-bottom: 8px;
`;

export const Position = styled.h5`
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  color: ${colors.text};
  font-weight: 700;
`;

export const JobMisc = styled.div`
  text-align: right;
`;

export const Date = styled.span`
  display: block;
  line-height: 12px;
  font-size: 12px;
  color: ${colors.secondary};
  font-weight: 300;
  margin-bottom: 16px;
`;

export const Location = styled.span`
  display: block;
  width: 120px;
  color: ${colors.secondary};
  font-weight: 600;
  line-height: 12px;
  font-size: 12px;
`;