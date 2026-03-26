import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import ProfileFieldCars from '../components/ProfileFieldCars';

const Profile = () => {
  const token = Cookies.get("mm-token");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const URL = `${import.meta.env.VITE_API_URL}/users/get`;
        const req = await fetch(URL, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token })
        })
        const res = await req.json();
        if (req.status !== 200) {
          return alert(res.err);
        }
        console.log(res);
        setData(res);

      } catch (err) {
        alert("Something went wrong");
      } finally {
        setLoading(false);
      }

    })()
  }, [])


  return (
    <>
      <Nav active={1} />
      <main className='main pt-5'>
        <div className='reg__circle__left'></div>
        <section className='w-[90%] md:w-[70%] flex flex-col items-center lg:flex-row lg:items-stretch gap-2 p-4'>
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-15">
              <Carousel
                baseWidth={300}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={false}
                loop={false}
                round={false}
              />
            </div>
          </div>

          {/* profile details */}
          <div className='w-full lg:w-[70%] flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-xl'>
            <ProfileFieldCars
              title={"Full Name"}
              subTitle={data?.full_name}
            />
            <ProfileFieldCars
              title={"Nick Name"}
              subTitle={data?.nick_name}
            />
            <ProfileFieldCars
              title={"Gender"}
              subTitle={data?.gender}
            />
            <ProfileFieldCars
              title={"Date of Birth"}
              subTitle={data?.dob.split("T")[0]}
            />
            <ProfileFieldCars
              title={"Date of Time"}
              subTitle={data?.birth_time}
            />
            <ProfileFieldCars
              title={"Address"}
              subTitle={`${data?.city}, ${data?.country}`}
            />
            <ProfileFieldCars
              title={"Country"}
              subTitle={data?.country}
            />
            <ProfileFieldCars
              title={"City"}
              subTitle={data?.city}
            />
            <ProfileFieldCars
              title={"Locality"}
              subTitle={data?.locality}
            />
            <ProfileFieldCars
              title={"Nationality"}
              subTitle={data?.nationality}
            />
            <ProfileFieldCars
              title={"Religion"}
              subTitle={data?.religion}
            />
            <ProfileFieldCars
              title={"Community Name"}
              subTitle={data?.community || "--"}
            />
            <ProfileFieldCars
              title={"Medical History"}
              subTitle={data?.medical_history || "--"}
            />
            <ProfileFieldCars
              title={"Whatsapp Number"}
              subTitle={data?.whatsapp_number}
            />
            <ProfileFieldCars
              title={"Height"}
              subTitle={data?.height}
            />
            <ProfileFieldCars
              title={"Weight"}
              subTitle={data?.weight}
            />
            <ProfileFieldCars
              title={"Eating preferences"}
              subTitle={data?.eating_preferences}
            />
            <ProfileFieldCars
              title={"Marital Status"}
              subTitle={data?.marital_status}
            />
            <ProfileFieldCars
              title={"Father's Name"}
              subTitle={data?.father_name}
            />
            <ProfileFieldCars
              title={"Father's Occupation"}
              subTitle={data?.father_occupation}
            />

            <ProfileFieldCars
              title={"Mother's Name"}
              subTitle={data?.mother_name}
            />
            <ProfileFieldCars
              title={"Mother's Occupation"}
              subTitle={data?.mother_occupation}
            />
            <ProfileFieldCars
              title={"No of Siblings"}
              subTitle={data?.no_of_siblings}
            />
            <ProfileFieldCars
              title={"Home Town"}
              subTitle={data?.hometown}
            />
            <ProfileFieldCars
              title={"Family Background"}
              subTitle={data?.family_background}
            />
            <ProfileFieldCars
              title={"Family Annual Income"}
              subTitle={data?.family_anual_income}
            />
            <ProfileFieldCars
              title={"Family Description"}
              subTitle={data?.family_description}
            />
            <ProfileFieldCars
              title={"Highest Qualification"}
              subTitle={data?.highest_qualification}
            />
            <ProfileFieldCars
              title={"School Name"}
              subTitle={data?.school_name}
            />
            {
              data?.ug_college_name && (
                <ProfileFieldCars
                  title={"UG College Name"}
                  subTitle={data?.ug_college_name}
                />
              )
            }
            {
              data?.pg_college_name && (
                <ProfileFieldCars
                  title={"PG College Name"}
                  subTitle={data?.pg_college_name}
                />
              )
            }
            {
              data?.phd_college_name && (
                <ProfileFieldCars
                  title={"Ph.D College Name"}
                  subTitle={data?.phd_college_name}
                />
              )
            }
            <ProfileFieldCars
              title={"Highest Degree"}
              subTitle={data?.highest_degree}
            />
            {
              data?.other_qualification_details && (
                <ProfileFieldCars
                  title={"Other Details"}
                  subTitle={data?.other_qualification_details}
                />
              )
            }

            <ProfileFieldCars
              title={"Nature of Work"}
              subTitle={data?.nature_of_work}
            />
            <ProfileFieldCars
              title={"Industry"}
              subTitle={data?.industry}
            />
            <ProfileFieldCars
              title={"Organization"}
              subTitle={data?.organization}
            />
            <ProfileFieldCars
              title={"Designation"}
              subTitle={data?.designation}
            />
            <ProfileFieldCars
              title={"Personal Anual Income"}
              subTitle={data?.personal_anual_income}
            />
            {
              data?.business_turnover && (
                <ProfileFieldCars
                  title={"Buisness Turnover"}
                  subTitle={data?.business_turnover}
                />
              )
            }
            {
              data?.business_website && (
                <ProfileFieldCars
                  title={"Buisness Website"}
                  subTitle={data?.business_website}
                />
              )
            }
            <ProfileFieldCars
              title={"How often do you drink"}
              subTitle={data?.how_often_you_drink}
            />
            <ProfileFieldCars
              title={"Are you smoker?"}
              subTitle={data?.are_you_a_smoker}
            />
            <ProfileFieldCars
              title={"How often do you workout"}
              subTitle={data?.how_often_you_workout}
            />
            <ProfileFieldCars
              title={"Your favourite weekend activities"}
              subTitle={data?.favourite_weekend_activities.join(", ")}
            />
            <ProfileFieldCars
              title={"Your interest"}
              subTitle={data?.interests.join(", ")}
            />
            <ProfileFieldCars
              title={"How often do eat out?"}
              subTitle={data?.how_often_you_eat_out}
            />
            <ProfileFieldCars
              title={"How often do you travel"}
              subTitle={data?.how_often_you_travel}
            />
            <ProfileFieldCars
              title={"Holidays do your prefer"}
              subTitle={data?.holidays_prefrences.join(", ")}
            />
            <ProfileFieldCars
              title={"Do you like socialise?"}
              subTitle={data?.prefered_social_event}
            />
            <ProfileFieldCars
              title={"You mostly go out with"}
              subTitle={data?.whom_do_you_like_going_out_with}
            />
            <ProfileFieldCars
              title={"Spritual you are"}
              subTitle={data?.how_spiritual_are_you}
            />
            <ProfileFieldCars
              title={"Religious you are?"}
              subTitle={data?.how_religious_are_you}
            />
            <ProfileFieldCars
              title={"A bride introduction"}
              subTitle={data?.about_yourself}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;