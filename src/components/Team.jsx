import Card from './shared/Card';
import member1 from './assets/member1.jpg';
import member2 from './assets/member2.jpg';
import member3 from './assets/member3.jpg';
import member4 from './assets/member4.png';
import member5 from './assets/member5.png';

function Team() {
  return (
    <section className='team'>
      <div className='container'>
        <h2 className='heading-lg'>
          Meet our <span className='text-primary'>team</span>
        </h2>
        <div className='team-wrapper'>
          <Card height='150px'>
            <div className='member-img'>
              <img src={member1} alt='' />
            </div>
            <div className='member-text'>
              <div className='member-name'>Mohan C M</div>
              <div className='member-role'>Founder &amp; Core Developer</div>
            </div>
          </Card>
          <Card height='150px'>
            <div className='member-img'>
              <img src={member2} alt='' />
            </div>
            <div className='member-text'>
              <div className='member-name'>Iacob Ionut</div>
              <div className='member-role'>UI/UX &amp; Core Developer</div>
            </div>
          </Card>
          <Card height='150px'>
            <div className='member-img'>
              <img src={member3} alt='' />
            </div>
            <div className='member-text'>
              <div className='member-name'>Manish Bajpai</div>
              <div className='member-role'>UI/UX Designer &amp; Developer</div>
            </div>
          </Card>
          <Card height='150px'>
            <div className='member-img'>
              <img src={member4} alt='' />
            </div>
            <div className='member-text'>
              <div className='member-name'>ririxi</div>
              <div className='member-role'>Backend Website Developer</div>
            </div>
          </Card>
          <Card height='150px'>
            <div className='member-img'>
              <img src={member5} alt='' />
            </div>
            <div className='member-text'>
              <div className='member-name'>Honorable Mentions</div>
              <div className='member-role'>
                Click <a href='#'>here</a> to see them!
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Team;
