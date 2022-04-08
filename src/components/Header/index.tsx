import ArrowImg from '../../assets/icon-arrow.svg';
import { Container, MapContainer, SearchInfos, SearchSection } from './styles';

export function Header() {
  return (
    <Container>
      <SearchSection>
       
        <h2>BUSCAR IP</h2>

        <div>
          <input type="text" placeholder="Search for any IP address or domain"/>
          <button><img src={ArrowImg} alt="" /></button>
        </div>

        <SearchInfos>
          <ul>
            <li>
              <div>
                <strong>Endereço de IP</strong>
                <p>192.168.0.100</p>
              </div>
            </li>

            <li>
              <div>
                <strong>Localização</strong>
                <p>Goiania, GO <br /> 10001</p>
              </div>
            </li>

            <li>
              <div>
                <strong>Timezone</strong>
                <p>UTC -03:00</p>
              </div>
            </li>

            <li>
              <div>
                <strong>ISP</strong>
                <p>SpaceX Starlink</p>
              </div>
            </li>
          </ul>
        </SearchInfos>
      </SearchSection>

      <MapContainer/>
    </Container>
  );
}